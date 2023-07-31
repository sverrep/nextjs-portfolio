import Hero from "@/components/Hero"
import Layout from "@/components/Layout"


export default function Home() {
  return (
    <main
      className={`flex items-center text-dark w-full min-h-screen`}
    >
      <Layout className="pt-0 px-12 md:px-32">
        <Hero />
      </Layout>
    </main>
  )
}
