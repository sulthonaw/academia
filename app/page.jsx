import { Card } from "@/components/ui/card";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import Image from "next/image";
import {
  AcademicCapIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import { Separator } from "@/components/ui/separator";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default function Home() {
  return (
    <section>
      <SidebarProvider>
        <AppSidebar />
        <div className="p-5 bg-slate-100">
          <div className="mb-5 grid grid-cols-3">
            <Card className={"p-5 shadow-none border-none"}>
              <div className="flex gap-3 items-center">
                <div className="p-3 rounded-lg bg-blue-100">
                  <AcademicCapIcon width={30} height={30} />
                </div>
                <div>
                  <h1 className="text-xl font-bold">24</h1>
                  <p className="text-sm text-slate-500">Kelas diikuti</p>
                </div>
              </div>
              <Separator className={"my-4"} />
              <div className="flex justify-between">
                <p className="text-sm font-bold text-slate-600">Lihat detail</p>
                <ArrowLongRightIcon width={24} height={24} />
              </div>
            </Card>
          </div>
          <Card className="p-5 shadow-none border-none">
            <h1 className="text-3xl font-semibold mb-3">Kelas</h1>
            <div className="grid w-full grid-cols-3">
              <Card className={"py-3 px-4 w-full border-slate-200 h-max"}>
                <div className="flex border justify-center mb-3 items-center h-40 rounded-lg bg-gradient-to-t from-blue-50 to-blue-200">
                  <Image
                    src={"/logo.png"}
                    width={50}
                    height={50}
                    alt={"logo"}
                  />
                </div>
                <h1 className="text font-bold mb-2">KALKULUS DASAR 1</h1>
                <p className="line-clamp-2 text-sm text-slate-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis odit sint eius in voluptates nam? Dignissimos dolor
                  consectetur excepturi, accusamus, doloremque odit nemo at
                  officiis unde praesentium assumenda, totam corporis.
                </p>
              </Card>
            </div>
          </Card>
        </div>
      </SidebarProvider>
    </section>
  );
}
