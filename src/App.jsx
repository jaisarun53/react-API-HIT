import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductList from "./ProductList"; // Assuming ProductList is your component using React Query hooks

// Create a new QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap your entire application or relevant part with QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {/* Your components here */}
        <ProductList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
