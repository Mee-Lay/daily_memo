"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          router.push("/memo/create");
        }}
      >
        Create New Memo
      </Button>
    </>
  );
};

export default Page;
