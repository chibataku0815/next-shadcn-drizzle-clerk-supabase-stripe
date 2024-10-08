import { Button } from "@repo/ui/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@repo/ui/components/ui/dialog";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { Plus } from "lucide-react";
import { createProject } from "@/actions/createProject";
import SubmitButton from "@/components/submit-proj-btn";

const NewProjBtn = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" className="p-2">
					<Plus className="w-6 h-6" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] rounded-md">
				<DialogHeader>
					<DialogTitle>New Project</DialogTitle>
					<DialogDescription>
						Create a new project to get started
					</DialogDescription>
				</DialogHeader>
				<form className="flex gap-4 flex-col" action={createProject}>
					<div className="grid sm:grid-cols-2 gap-4">
						<div className="flex flex-col gap-2">
							<Label htmlFor="name">Name</Label>
							<Input id="name" name="name" placeholder="Project Name" />
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="url">URL</Label>
							<Input id="url" name="url" placeholder="https://example.com" />
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="description">Description</Label>
						<Textarea
							name="description"
							id="description"
							placeholder="Description (optional)"
						/>
					</div>
					<SubmitButton />{" "}
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default NewProjBtn;
