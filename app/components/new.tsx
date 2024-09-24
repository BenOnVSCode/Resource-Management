"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function New() {
	const [isDialogOpen, setDialogOpen] = useState(false);
	const [dialogType, setDialogType] = useState<"resource" | "category">("resource");

	const handleDialogOpen = (type: "resource" | "category") => {
		setDialogType(type);
		setDialogOpen(true);
	};

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<div className="w-[50px] h-[50px] cursor-pointer rounded-full bg-white flex items-center justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-plus"
						>
							<path d="M5 12h14" />
							<path d="M12 5v14" />
						</svg>
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuLabel>New</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={() => handleDialogOpen("resource")}>
						New Resource
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => handleDialogOpen("category")}>
						New Category
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			<Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>{dialogType === "resource" ? "New Resource" : "New Category"}</DialogTitle>
						<DialogDescription>
							{dialogType === "resource" ? "Add a new resource to the collection" : "Add a new category to the collection"}
						</DialogDescription>
					</DialogHeader>
					<div className="flex flex-col py-4 gap-4">
						<div className="flex flex-col justify-start gap-2">
							<Label htmlFor="name">Name</Label>
							<Input id="name" className="col-span-3" />
						</div>
						{dialogType === "resource" && (
							<div className="flex flex-col justify-start gap-2">
								<Label htmlFor="description">Description</Label>
								<Textarea id="description" className="col-span-3" />
                <Label htmlFor="url" className="mt-2">Url</Label>
								<Input placeholder="www.dribble.com" id="url" className="col-span-3" />
							</div>
						)}
					</div>
					<DialogFooter>
						<Button type="submit">Create {dialogType}</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}
