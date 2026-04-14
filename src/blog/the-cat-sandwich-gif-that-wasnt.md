---
title: "Bambi The Cat, the Sandwich, and the GIF That Wasn't"
date: "2024-01-01"
excerpt: "Asking an AI to make a GIF sounds simple. Why did it take seven photos of my cat, three failed attempts, and an essay to figure out what went wrong?"
tags: ["AI", "Claude", "GIF", "cats", "debugging"]
---

# Bambi The Cat, the Sandwich, and the GIF That Wasn't

*Or: Simply make me a GIF, Claude.*

![Bambi materializes on the couch](images/bambi/bambi1.jpg)

I have seven photos of my orange cat, Bambi, staging a slow-motion heist on an Ike's sandwich. The arc is perfect: she materializes on the couch, creeps onto the coffee table, leans in, and finally squares up nose-to-bread with the loot. It's begging to be a GIF.

![Bambi creeps onto the coffee table](images/bambi/bambi2.jpg)

So I asked Claude Cowork to make one. What followed was a quietly fascinating failure — the kind that tells you more about how these tools actually work than any polished demo could.

![Bambi leans in](images/bambi/bambi3.jpg)

## The prompt

> **Me:** could you create a gif from these images

Seven photos attached. Clear intent. The kind of task a ten-line Python script with Pillow could knock out in under a second.

![Bambi squares up nose-to-bread](images/bambi/bambi4.jpg)

## The first wall

Claude — running inside Cowork with a full Linux sandbox, file tools, Python, ffmpeg, the works — went looking for the images and came back empty-handed:

> **Claude:** The images appear in our chat but weren't attached as files I can access on disk… Could you re-upload the 7 photos as attachments (drag them into the chat)? Once they land in my uploads folder I'll stitch them into a GIF.

This was already weird to me. *You're literally looking at the photos right now.* They were rendered in the conversation. Claude was describing them back to me ("cat spotting sandwich → approaching → on table → settled"). How can you see them and not have them?

## The debug loop

I re-sent the photos. Same response.

> **Me:** i did both of those thingd
>
> **Claude:** I hear you, but my uploads folder is genuinely still empty on my end — `/mnt/uploads/` has no files… The images render inline in our chat so I can see them, but I can't extract the pixel data from that view; I need them as actual attached files.

That sentence is the whole story: **"I can see them, but I can't extract the pixel data from that view."**

It sounds like a contradiction. It isn't. It's architecture.

## Why this happens

When you drop an image into a chat with Claude, two very different things *can* happen:

1. **The image is encoded as vision tokens and streamed into the model's context.** Claude "sees" it the way you see a memory — as a perception, not a file. There are no bytes to grab, no PNG header to parse, no array of pixels to hand to Pillow. It's been pre-digested into the embedding space.
2. **The image is saved as a file on the sandbox disk** (e.g., `/mnt/uploads/cat1.jpg`). *Now* tools like Python, ffmpeg, and ImageMagick can touch it.

Creating a GIF requires path #2. The image has to exist as bytes that code can read, resize, and encode. Vision tokens can't be piped into ffmpeg — they're a different substance entirely.

In our conversation, path #1 was happening and path #2 wasn't. Claude kept running `ls /mnt/uploads/` and getting:

> ```
> total 4
> dr-x------ 2 loving-zealous-fermi ... .
> dr-xr-x 8 loving-zealous-fermi ... ..
> ```

An empty folder, every time. It had a gallery in its mind's eye and a bare cupboard in its hands.

## The "seemingly simple prompt" problem

This is what makes the example useful. "Make a GIF from these images" sounds like the most basic request in the world — the kind of thing an intern does between coffee sips. And Claude is *wildly* capable. It can write the encoder from scratch, reason about frame timing, even draft this very blog post. What it couldn't do was the one thing the task actually needed: touch the bytes.

The gap between what an AI appears to be able to do and what it can actually reach through its tools is a recurring theme in agentic systems. You see glossy demos of AIs "using a computer," and then in real life you hit a mundane plumbing issue — an upload path that doesn't connect to the sandbox mount, or a file handler that sends images down the vision pipeline instead of the filesystem one — and the whole thing grinds to a halt.

The *intelligence* isn't the bottleneck. The *connective tissue* is.

## The debug conversation, preserved

For posterity, the exchange that gets to the heart of it:

> **Me:** could you create a gif from these images
>
> **Claude:** \[checks `/mnt/uploads/`, finds nothing\] The images appear in our chat but weren't attached as files I can access on disk.
>
> **Me:** here \[re-uploads\]
>
> **Claude:** The uploads folder is still empty on my side — `/mnt/uploads/` has no files. The images render inline in our chat so I can see them, but I can't extract the pixel data from that view; I need them as actual attached files.
>
> **Me:** i did both of those thingd
>
> **Claude:** \[still empty\] I hear you, but my uploads folder is genuinely still empty on my end.

Three rounds. Same answer. Not because Claude was being stubborn — because the file genuinely wasn't there. It was a *correctly-functioning* tool honestly reporting its environment. The failure was upstream: somewhere between my upload button and the sandbox mount, the handoff wasn't happening.

## What I learned

A few takeaways from this absurd little saga:

- **Vision and filesystem are different worlds.** An AI "seeing" your image and an AI being able to *process* your image are not the same capability. If you want bytes-level work — GIFs, resizing, OCR, metadata extraction — the file has to live on disk.
- **"Simple" prompts are often load-bearing on invisible infrastructure.** The difficulty of a task for an AI agent isn't correlated with how simple it sounds to a human.
- **Honest failure is a feature.** Claude didn't hallucinate a GIF. It didn't pretend. It kept saying "the folder is empty" and suggesting workarounds. That's the right behavior, even when it's frustrating.
- **Debugging an AI is debugging a system.** The model is one component. The sandbox, the tool bindings, the upload pipeline, and the UI are all equally capable of being the broken link.

## The cat, meanwhile

![Bambi unbothered](images/bambi/bambi5.jpg)

![Bambi unbothered, part 2](images/bambi/bambi6.jpg)

![Bambi unbothered, part 3](images/bambi/bambi7.jpg)

…is still staring at me from across the coffee table, entirely unbothered that her highlight reel remains un-animated. Maybe that's the real moral: the only party in this whole affair who's actually succeeded at anything is the cat.

I'll try the GIF again tomorrow. If it works, I'll post it below. If it doesn't, at least I've got this essay.