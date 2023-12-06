"use client";
import qs from "query-string";
import useDebaunce from "@/hooks/useDebaunce";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Input from "./Input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debauncedValue = useDebaunce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debauncedValue,
    };
    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });
    console.log(url);
    router.push(url);
  }, [debauncedValue,router]);

  return (
    <Input placeholder="What do you want to listen to?" value={value} onChange={(e)=>setValue(e.target.value)}/>
  );
};

export default SearchInput;
