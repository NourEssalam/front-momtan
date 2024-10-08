import { CopyIcon } from "@radix-ui/react-icons";
import Container from "@/components/shared-components/Container";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CiSearch } from "react-icons/ci";
import SearchResultElement from "./SearchResultElement";

export function DialogSearchButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CiSearch className="text-grey stroke-1 w-7 h-7 cursor-pointer hover:text-accent" />
      </DialogTrigger>
      <DialogContent
        className=" gap-0 max-w-[1024px] inset-0 p-4 mx-auto md:my-10  bg-white left-[0%] top-[0%] 
      translate-x-[0%] translate-y-[0%]"
      >
        <DialogHeader className=" text-left mb-0 gap-2 space-x-0">
          <DialogTitle>Search</DialogTitle>

          <div className="">
            <Label htmlFor="search" className="sr-only">
              Search
            </Label>
            <Input
              type="search"
              id="search"
              placeholder="Search for anything..."
            />
          </div>
        </DialogHeader>
        {/* Results */}
        <div className="overflow-y-scroll md:grid grid-cols-2 gap-3 mt-4 ">
          {/* events */}
          <div className="flex flex-col gap-2 p-4">
            <h3 className="text-lg font-bold">Events</h3>

            <div className=" grid grid-cols-2">
              <SearchResultElement />
              <SearchResultElement />
              <SearchResultElement />
              <SearchResultElement />
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <h3 className="text-lg font-bold">Posts</h3>

            <div className=" grid grid-cols-2">
              <SearchResultElement />
              <SearchResultElement />
              <SearchResultElement />
              <SearchResultElement />
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <h3 className="text-lg font-bold">Posts</h3>

            <div className=" grid grid-cols-2">
              <SearchResultElement />
              <SearchResultElement />
              <SearchResultElement />
              <SearchResultElement />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
