import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Home = () => {
  const codeString = `
const fetchData = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        setData(data);
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }
};
  `;

  const codeStr = `
const { data, error, isLoading } = useQuery('fetchData', fetchData);
  `;

  return (
    <div className="container">
      <h1>Difference Between Regular Fetch and React Query Fetch</h1>

      <h2>1. Manual Fetching vs. Automatic State Management</h2>
      <p>
        <strong>Regular fetch:</strong>
      </p>
      <ul>
        <li>
          With <code>fetch</code>, you manually call an API and handle the state
          of the request (loading, error, success) in your component.
        </li>
        <li>
          You need to manage things like caching, retries, and pagination
          manually if needed.
        </li>
        <li>
          Example:
          <div>
            <h2>Code Example</h2>
            <SyntaxHighlighter language="javascript" style={solarizedlight}>
              {codeString}
            </SyntaxHighlighter>
          </div>
        </li>
      </ul>

      <p>
        <strong>React Query:</strong>
      </p>
      <ul>
        <li>
          React Query abstracts the logic of fetching, caching, synchronization,
          background updates, retries, and more.
        </li>
        <li>
          It provides hooks (like <code>useQuery</code> and{" "}
          <code>useMutation</code>) that automatically manage loading states,
          caching, and error handling for you.
        </li>
        <li>
          React Query also manages background refetching, pagination, and can
          automatically update data when certain conditions are met.
        </li>
        <li>Example:</li>
        <SyntaxHighlighter language="javascript" style={solarizedlight}>
          {codeStr}
        </SyntaxHighlighter>
      </ul>

      <h2>2. Caching and Performance</h2>
      <p>
        <strong>Regular fetch:</strong>
      </p>
      <ul>
        <li>
          You have to manually implement caching if you want to avoid
          unnecessary network requests, which can lead to redundant API calls.
        </li>
      </ul>

      <p>
        <strong>React Query:</strong>
      </p>
      <ul>
        <li>
          React Query automatically caches the data fetched from the API. This
          can lead to performance improvements since it avoids refetching the
          same data multiple times unless explicitly configured to do so.
        </li>
        <li>
          It also provides automatic background refetching when the data becomes
          stale.
        </li>
      </ul>

      <h2>3. Error and Loading States</h2>
      <p>
        <strong>Regular fetch:</strong>
      </p>
      <ul>
        <li>
          You need to manually manage loading and error states using{" "}
          <code>setState</code> or similar mechanisms.
        </li>
      </ul>

      <p>
        <strong>React Query:</strong>
      </p>
      <ul>
        <li>
          React Query handles these states internally, making it easy to access
          the current state of the request (whether it's loading, has data, or
          has encountered an error).
        </li>
      </ul>

      <h2>4. Automatic Refetching and Background Sync</h2>
      <p>
        <strong>Regular fetch:</strong>
      </p>
      <ul>
        <li>
          You need to implement manual checks and triggers if you want data to
          be refetched when certain conditions occur.
        </li>
      </ul>

      <p>
        <strong>React Query:</strong>
      </p>
      <ul>
        <li>
          React Query offers automatic refetching and background syncing of
          data. You can configure it to refetch data periodically or when
          certain events (like window focus or network reconnect) occur.
        </li>
      </ul>

      <h2>5. Retries and Pagination</h2>
      <p>
        <strong>Regular fetch:</strong>
      </p>
      <ul>
        <li>
          If you need retries (in case of failures) or pagination, you'll need
          to handle these manually.
        </li>
      </ul>

      <p>
        <strong>React Query:</strong>
      </p>
      <ul>
        <li>
          React Query has built-in support for retries (e.g., automatic retries
          on failure) and pagination, which can be handled through configuration
          and its APIs.
        </li>
      </ul>

      <h2>6. Code Simplicity and Developer Experience</h2>
      <p>
        <strong>Regular fetch:</strong>
      </p>
      <ul>
        <li>
          Fetching data with <code>fetch</code> can result in more boilerplate
          code, especially when handling various states and features
          (pagination, retries, caching).
        </li>
      </ul>

      <p>
        <strong>React Query:</strong>
      </p>
      <ul>
        <li>
          React Query reduces the need for boilerplate code by abstracting the
          state management and other features, leading to cleaner and more
          concise code.
        </li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        <strong>
          Use regular <code>fetch</code>
        </strong>{" "}
        if you need full control over the request lifecycle, or for simpler
        cases where you don’t need automatic caching, state management, or
        retries.
      </p>
      <p>
        <strong>Use React Query</strong> if you're working on a more complex
        application with frequent data fetching, and you want to take advantage
        of features like caching, background updates, pagination, retries, and
        automatic state management.
      </p>
      <p>
        React Query simplifies many aspects of data fetching and state
        management, making it a great choice for more dynamic, large-scale
        applications.
      </p>
    </div>
  );
};

export default Home;
