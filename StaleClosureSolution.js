const useMyCallback = () => {
  const [count, setCount] = useState(0);

  const memoizedCallback = useCallback((newCount) => {
    console.log("Count inside callback:", newCount);
    // Use the passed 'newCount' instead of the closure value
  }, []);

  return {
    count,
    setCount,
    memoizedCallback
  };
};
