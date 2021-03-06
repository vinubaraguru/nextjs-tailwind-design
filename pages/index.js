import Head from 'next/head'

export default function Home() {
  return (
    <div className="px-4 py-10" >
      <Head>
        <title>Nexjs-Tailwind Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="mx-auto overflow-hidden rounded-lg md:w-2/4">
        <section className="p-8 bg-white">
          <h1 className="text-xl font-semibold text-green-600 ">Join our community</h1>
          <h2 className="pt-4 font-semibold text-yellow-400"> 30-day hassel-free money back guarnatee</h2>
          <p className="pt-4 text-gray-500">
            Gain access to our library of tutorials along with expert code reviews. Perfect for any developers who are serious about thier honing skills.
          </p>
        </section>
        <section className="text-white md:flex md:flex-row">
          <div className="p-8 bg-green-600 md:w-1/2">
            <h2 className="text-lg font-semibold">Money Subscription</h2>
            <div className="flex items-center pt-2">
              <p className="text-2xl font-semibold">$29</p>
              <p className="ml-2 font-thin">per month</p>
            </div>
            <p className="text-sm font-light">Full access for less than $1 a day</p>
            <button className="w-full px-4 py-2 mt-6 font-bold text-white bg-yellow-400 rounded shadow-md">
              Sign Up
            </button>
          </div>
          <div className="p-8 bg-green-400 md:w-1/2">
            <h2 className="text-lg font-semibold">Why Us</h2>
            <div className="pt-2 text-sm font-light">
              <p>Tutorials by industry experts</p>
              <p>Coding excercise Access</p>
              <p>Peer & expert code review</p>
              <p>Access to our Github repos</p>
              <p>Community forum</p>
              <p>Flashback decks</p>
              <p>New Videos every week</p>
            </div>
          </div>
          
        </section>
      </div>
      
    </div>
  )
}
