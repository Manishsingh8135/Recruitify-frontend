import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
]

type CardProps = React.ComponentProps<typeof Card>



export function CardDemo({ className, ...props }: CardProps) {
    return (
        <Card className={cn("w-full", className)} {...props}>
            <CardHeader>
                <CardTitle>Google</CardTitle>
                <CardDescription>SDE 1</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, quas?</p>                   
                   
                </div>
                <div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
                </Button>
            </CardFooter>
        </Card>
    )
}
