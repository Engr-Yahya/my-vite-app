// import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function TestQuery() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      return "React Query works!"; // Simple static data
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  return <div>{data}</div>;
}
