import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Toast, ToastAction } from "@/components/ui/toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from "@/components/ui/context-menu";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "@/components/ui/menubar";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AlertCircle, ArrowRight, CheckCircle, ChevronDown, ExternalLink, Mail, PlusCircle, Settings, User } from 'lucide-react';

const Surprise = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-8">🎉 Surprise!</h1>
          <p className="text-xl text-muted-foreground">
            Congratulations! You've discovered the secret UI components showcase page. 
            This is where we document all our beautiful UI elements and their corresponding classes.
            Feel free to use this as a reference for your development work!
          </p>
          <div className="h-8" /> {/* Spacer */}
        </div>
        <h1 className="text-4xl font-bold mb-8">UI Elements Showcase</h1>
        
        {/* HTML Tags */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">HTML Tags</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="tag">Default Tag</span>
                <div className="text-xs text-muted-foreground">{"className=\"tag\""}</div>
              </div>
              <div className="space-y-2">
                <span className="tag mb-4">Tag with Margin</span>
                <div className="text-xs text-muted-foreground">{"className=\"tag mb-4\""}</div>
              </div>
              <div className="space-y-2">
                <span className="tag text-primary">Primary Tag</span>
                <div className="text-xs text-muted-foreground">{"className=\"tag text-primary\""}</div>
              </div>
              <div className="space-y-2">
                <span className="tag bg-primary text-primary-foreground">Primary Background Tag</span>
                <div className="text-xs text-muted-foreground">{"className=\"tag bg-primary text-primary-foreground\""}</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="tag text-secondary">Secondary Tag</span>
                <div className="text-xs text-muted-foreground">{"className=\"tag text-secondary\""}</div>
              </div>
              <div className="space-y-2">
                <span className="tag bg-secondary text-secondary-foreground">Secondary Background Tag</span>
                <div className="text-xs text-muted-foreground">{"className=\"tag bg-secondary text-secondary-foreground\""}</div>
              </div>
              <div className="space-y-2">
                <span className="tag text-destructive">Destructive Tag</span>
                <div className="text-xs text-muted-foreground">{"className=\"tag text-destructive\""}</div>
              </div>
              <div className="space-y-2">
                <span className="tag bg-destructive text-destructive-foreground">Destructive Background Tag</span>
                <div className="text-xs text-muted-foreground">{"className=\"tag bg-destructive text-destructive-foreground\""}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <div className="space-y-2">
              <Button>Default Button</Button>
              <div className="text-xs text-muted-foreground">{"className=\"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0\""}</div>
            </div>
            <div className="space-y-2">
              <Button variant="secondary">Secondary Button</Button>
              <div className="text-xs text-muted-foreground">variant="secondary"</div>
            </div>
            <div className="space-y-2">
              <Button variant="outline">Outline Button</Button>
              <div className="text-xs text-muted-foreground">variant="outline"</div>
            </div>
            <div className="space-y-2">
              <Button variant="ghost">Ghost Button</Button>
              <div className="text-xs text-muted-foreground">variant="ghost"</div>
            </div>
            <div className="space-y-2">
              <Button variant="link">Link Button</Button>
              <div className="text-xs text-muted-foreground">variant="link"</div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Cards</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <div className="text-xs text-muted-foreground space-y-2">
              <div>Card: "rounded-lg border bg-card text-card-foreground shadow-sm"</div>
              <div>CardHeader: "flex flex-col space-y-1.5 p-6"</div>
              <div>CardTitle: "text-2xl font-semibold leading-none tracking-tight"</div>
              <div>CardDescription: "text-sm text-muted-foreground"</div>
              <div>CardContent: "p-6 pt-0"</div>
              <div>CardFooter: "flex items-center p-6 pt-0"</div>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Badges</h2>
          <div className="flex flex-wrap gap-4">
            <div className="space-y-2">
              <Badge>Default Badge</Badge>
              <div className="text-xs text-muted-foreground">{"className=\"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2\""}</div>
            </div>
            <div className="space-y-2">
              <Badge variant="secondary">Secondary Badge</Badge>
              <div className="text-xs text-muted-foreground">variant="secondary"</div>
            </div>
            <div className="space-y-2">
              <Badge variant="destructive">Destructive Badge</Badge>
              <div className="text-xs text-muted-foreground">variant="destructive"</div>
            </div>
            <div className="space-y-2">
              <Badge variant="outline">Outline Badge</Badge>
              <div className="text-xs text-muted-foreground">variant="outline"</div>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Form Elements</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
                <div className="text-xs text-muted-foreground">{"className=\"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50\""}</div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" />
                <div className="text-xs text-muted-foreground">{"className=\"flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50\""}</div>
              </div>
              <div className="space-y-2">
                <Label>Select Option</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
                <div className="text-xs text-muted-foreground">{"className=\"flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50\""}</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
                <div className="text-xs text-muted-foreground">{"className=\"peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground\""}</div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
                <div className="text-xs text-muted-foreground">{"className=\"peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input\""}</div>
              </div>
              <div className="flex items-center space-x-2">
                <Toggle>Toggle</Toggle>
                <div className="text-xs text-muted-foreground">{"className=\"inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground\""}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Progress */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Progress</h2>
          <div className="space-y-4">
            <Progress value={33} />
            <div className="text-xs text-muted-foreground">Progress: "relative h-4 w-full overflow-hidden rounded-full bg-secondary"</div>
          </div>
        </section>

        {/* Hover Card */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Hover Card</h2>
          <div className="space-y-4">
            <HoverCard>
              <HoverCardTrigger>
                <Button variant="outline">Hover me</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Hover Card Title</h4>
                  <p className="text-sm">Hover Card Content</p>
                </div>
              </HoverCardContent>
            </HoverCard>
            <div className="text-xs text-muted-foreground">HoverCardContent: "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"</div>
          </div>
        </section>

        {/* Accordion */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Accordion</h2>
          <div className="space-y-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="text-xs text-muted-foreground">AccordionTrigger: "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]&gt;svg]:rotate-180"</div>
          </div>
        </section>

        {/* Alert */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Alert</h2>
          <div className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Alert Title</AlertTitle>
              <AlertDescription>Alert Description</AlertDescription>
            </Alert>
            <div className="text-xs text-muted-foreground">Alert: "relative w-full rounded-lg border p-4 [&gt;svg~*]:pl-7 [&gt;svg+div]:translate-y-[-3px] [&gt;svg]:absolute [&gt;svg]:left-4 [&gt;svg]:top-4 [&gt;svg]:text-foreground"</div>
          </div>
        </section>

        {/* Avatar */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Avatar</h2>
          <div className="space-y-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-xs text-muted-foreground">Avatar: "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"</div>
          </div>
        </section>

        {/* Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Table</h2>
          <div className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="text-xs text-muted-foreground">Table: "w-full caption-bottom text-sm"</div>
          </div>
        </section>

        {/* Tabs */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tabs</h2>
          <div className="space-y-4">
            <Tabs defaultValue="account">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">Account content</TabsContent>
              <TabsContent value="password">Password content</TabsContent>
            </Tabs>
            <div className="text-xs text-muted-foreground">TabsList: "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Surprise; 