import Navigation from "@/components/site/navigation"
import getCurrentUser from "../actions/getCurrentUser"


const layout = async({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  return (
      <main className="h-full">
        <Navigation currentUser={currentUser} />
        {children}
      </main>
  )
}


export default layout