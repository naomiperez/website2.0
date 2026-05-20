---
title: "React Class Component: A Complete Guide (and React Class vs Functional Component)"
author: Naomi
date: 2025-04-19
excerpt: Everything you need to know about the React class component — syntax, lifecycle methods, state, and when to choose a React class component vs a functional component in modern React.
---

A **React class component** is one of the two primary ways to define a component in React. While functional components with Hooks have become the modern default, understanding the React class component is still essential for reading legacy codebases, migrating apps, and working with features like error boundaries. In this guide, I'll walk through what a React class component is, how it works, and compare **React class vs functional component** so you know which one to reach for.

<h2>What Is a React Class Component?</h2>
<p>A React class component is a JavaScript ES6 class that extends <code>React.Component</code> and implements a <code>render()</code> method that returns JSX. Class components have access to local state via <code>this.state</code>, lifecycle methods like <code>componentDidMount</code>, and instance methods you can bind to event handlers.</p>

<p>Here's the simplest possible React class component:</p>

```jsx
import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;
```

<h2>React Class Component with State</h2>
<p>State in a React class component lives on <code>this.state</code> and is updated with <code>this.setState()</code>. Never mutate <code>this.state</code> directly — always use <code>setState</code> so React knows to re-render.</p>

```jsx
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}

export default Counter;
```

<h2>Lifecycle Methods in a React Class Component</h2>
<p>Lifecycle methods are one of the biggest reasons a React class component can still be useful. The most common ones are:</p>

<ul>
  <li><strong>componentDidMount()</strong> — runs once after the component mounts. Great for fetching data or setting up subscriptions.</li>
  <li><strong>componentDidUpdate(prevProps, prevState)</strong> — runs after every update (but not the initial render).</li>
  <li><strong>componentWillUnmount()</strong> — runs right before the component is removed. Use it to clean up timers, listeners, or subscriptions.</li>
  <li><strong>shouldComponentUpdate(nextProps, nextState)</strong> — lets you skip re-renders for performance.</li>
  <li><strong>getDerivedStateFromProps()</strong> and <strong>getSnapshotBeforeUpdate()</strong> — advanced, less common.</li>
</ul>

```jsx
class UserProfile extends React.Component {
  state = { user: null };

  componentDidMount() {
    fetch(`/api/users/${this.props.id}`)
      .then((res) => res.json())
      .then((user) => this.setState({ user }));
  }

  componentWillUnmount() {
    // clean up here
  }

  render() {
    const { user } = this.state;
    if (!user) return <p>Loading…</p>;
    return <h2>{user.name}</h2>;
  }
}
```

<h2>React Class vs Functional Component</h2>
<p>So when should you use a React class component vs a functional component? Here's a side-by-side breakdown of <strong>React class vs functional component</strong>:</p>

<h3>Syntax</h3>
<p>A functional component is just a function that returns JSX. A React class component is a class that extends <code>React.Component</code> and has a <code>render()</code> method. Functional components are shorter and easier to read.</p>

```jsx
// Functional component
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}

// React class component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

<h3>State</h3>
<p>React class component uses <code>this.state</code> and <code>this.setState</code>. Functional components use the <code>useState</code> Hook. Hooks let you split state into multiple independent variables, which is often cleaner than one big state object.</p>

<h3>Lifecycle</h3>
<p>A React class component uses dedicated lifecycle methods. A functional component uses the <code>useEffect</code> Hook to cover mounting, updating, and unmounting — usually with less code.</p>

<h3>Performance</h3>
<p>Both approaches perform similarly in most real-world apps. Functional components can be optimized with <code>React.memo</code>, and class components with <code>shouldComponentUpdate</code> or <code>PureComponent</code>.</p>

<h3>Readability and Reusability</h3>
<p>Functional components with custom Hooks make it much easier to extract and reuse logic across components. In a React class component, the equivalent patterns (higher-order components, render props) tend to produce deeply nested "wrapper hell."</p>

<h3>`this` Binding</h3>
<p>A React class component forces you to think about <code>this</code> — you typically bind event handlers in the constructor or use class field arrow functions. Functional components don't have a <code>this</code>, so this whole category of bugs simply goes away.</p>

<h2>When Should You Still Use a React Class Component?</h2>
<ul>
  <li><strong>Error boundaries.</strong> As of today, error boundaries still require a class component because they rely on <code>componentDidCatch</code> and <code>getDerivedStateFromError</code>.</li>
  <li><strong>Legacy codebases.</strong> If your team's code is mostly class components, consistency can be more valuable than mixing styles.</li>
  <li><strong>Learning React's history.</strong> Understanding the React class component makes lifecycle-aware thinking click, which transfers directly to <code>useEffect</code>.</li>
</ul>

<h2>Converting a React Class Component to a Functional Component</h2>
<p>Most React class components can be rewritten as functional components using Hooks. A quick cheat sheet:</p>

<ul>
  <li><code>this.state</code> + <code>this.setState</code> → <code>useState</code></li>
  <li><code>componentDidMount</code> → <code>useEffect(fn, [])</code></li>
  <li><code>componentDidUpdate</code> → <code>useEffect(fn, [deps])</code></li>
  <li><code>componentWillUnmount</code> → the cleanup function returned from <code>useEffect</code></li>
  <li><code>this.context</code> → <code>useContext</code></li>
  <li>Instance variables → <code>useRef</code></li>
</ul>

```jsx
// Before: React class component
class Counter extends React.Component {
  state = { count: 0 };
  componentDidMount() {
    document.title = `Count: ${this.state.count}`;
  }
  componentDidUpdate() {
    document.title = `Count: ${this.state.count}`;
  }
  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        {this.state.count}
      </button>
    );
  }
}

// After: functional component with Hooks
function Counter() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

<h2>React Class Component FAQ</h2>

<h3>Is the React class component deprecated?</h3>
<p>No. The React team has repeatedly said they have no plans to remove class components. They are still fully supported in the latest versions of React. That said, new features and most documentation are focused on Hooks and functional components.</p>

<h3>Can a React class component use Hooks?</h3>
<p>No — Hooks can only be called inside functional components or other custom Hooks. If you need Hook-style logic inside a class, you'll need to wrap it with a small functional component or refactor.</p>

<h3>React class vs functional component: which is faster?</h3>
<p>For almost every app, the difference is negligible. Focus on correctness, readability, and reusability first. Profile only if you have a measured performance problem.</p>

<h2>Conclusion</h2>
<p>The React class component isn't going anywhere, but functional components with Hooks are the modern default. Use a class component when you need an error boundary or are working in a class-heavy codebase, and reach for functional components everywhere else. Once you've internalized the React class vs functional component trade-offs, you can pick the right tool for each job with confidence.</p>

<p>If you found this React class component guide helpful, feel free to reach out on LinkedIn — I'd love to hear what you're building.</p>
