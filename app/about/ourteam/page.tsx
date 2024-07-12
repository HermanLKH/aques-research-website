import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function OurTeam() {
  return (
    <>
      {/* Section 1: Title & description */}
      <section className="flex flex-col items-center my-20">
        <div className="w-10/12 md:w-3/4 lg:w-3/5">
          <h1 className="font-bold text-5xl text-center">
            The AquES <span className="text-cyan-600">Team</span>
          </h1>
          <p className="text-center font-light mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            architecto, provident magnam earum voluptate perspiciatis non quae
            quo. Culpa quis itaque laudantium placeat, commodi repudiandae aut
            perferendis velit incidunt voluptas..
          </p>
        </div>
      </section>

      {/* Section 2: Founders */}
      <section className="bg-slate-50 py-10 flex justify-center">
        <div className="w-full lg:w-4/5 flex flex-wrap justify-center">
          <h2 className="w-full font-semibold text-3xl text-center mb-5">
            Founders
          </h2>

          {/* Card 1 */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-4 relative">
            <Image
              src="/images/elonmusk.jpg"
              width={500}
              height={200}
              alt="Picture of Elon Musk"
              className="rounded-t-lg w-full h-[200px] object-cover"
            />
            <div className="p-5">
              <h6 className="text-sm text-cyan-600 font-normal">Founder</h6>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Professor Dr Moritz Müller
              </h5>
              <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officiis obcaecati cupiditate quia eum quod, ea dolorum optio
                minima atque culpa fugit quo aliquam quis eaque debitis quaerat
                porro repellat quas.
              </p>
              <Link href="">
                <FaLinkedin className="absolute bottom-5 left-5 text-3xl hover:-translate-y-1 ease-in duration-100 cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-4 relative">
            <Image
              src="/images/elonmusk.jpg"
              width={500}
              height={200}
              alt="Picture of Elon Musk"
              className="rounded-t-lg w-full h-[200px] object-cover"
            />
            <div className="p-5">
              <h6 className="text-sm text-cyan-600 font-normal">Founder</h6>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Associate Professor Dr Aazani Mujahid
              </h5>
              <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officiis obcaecati cupiditate quia eum quod, ea dolorum optio
                minima atque culpa fugit quo aliquam quis eaque debitis quaerat
                porro repellat quas.
              </p>
              <Link href="">
                <FaLinkedin className="absolute bottom-5 left-5 text-3xl hover:-translate-y-1 ease-in duration-100 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Senior Researchers */}
      <section className="py-10 flex justify-center">
        <div className="w-full lg:w-4/5 flex flex-wrap justify-center">
          <h2 className="w-full font-semibold text-3xl text-center mb-5">
            Senior Researchers
          </h2>

          {/* Card 1 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-4 relative">
            <Image
              src="/images/elonmusk.jpg"
              width={500}
              height={200}
              alt="Picture of Elon Musk"
              className="rounded-t-lg w-full h-[200px] object-cover"
            />
            <div className="p-5">
              <h6 className="text-sm text-cyan-600 font-normal">
                Senior Researcher
              </h6>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ting Lik Fong
              </h5>
              <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officiis obcaecati cupiditate quia eum quod, ea dolorum optio
                minima atque culpa fugit quo aliquam quis eaque debitis quaerat
                porro repellat quas.
              </p>
              <Link href="">
                <FaLinkedin className="absolute bottom-5 left-5 text-3xl hover:-translate-y-1 ease-in duration-100 cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-4 relative">
            <Image
              src="/images/elonmusk.jpg"
              width={500}
              height={200}
              alt="Picture of Elon Musk"
              className="rounded-t-lg w-full h-[200px] object-cover"
            />
            <div className="p-5">
              <h6 className="text-sm text-cyan-600 font-normal">
                Senior Researcher
              </h6>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ts Dr Miko Chang May Lee
              </h5>
              <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officiis obcaecati cupiditate quia eum quod, ea dolorum optio
                minima atque culpa fugit quo aliquam quis eaque debitis quaerat
                porro repellat quas.
              </p>
              <Link href="">
                <FaLinkedin className="absolute bottom-5 left-5 text-3xl hover:-translate-y-1 ease-in duration-100 cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-4 relative">
            <Image
              src="/images/elonmusk.jpg"
              width={500}
              height={200}
              alt="Picture of Elon Musk"
              className="rounded-t-lg w-full h-[200px] object-cover"
            />
            <div className="p-5">
              <h6 className="text-sm text-cyan-600 font-normal">
                Senior Researcher
              </h6>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Dr Wong Changi
              </h5>
              <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officiis obcaecati cupiditate quia eum quod, ea dolorum optio
                minima atque culpa fugit quo aliquam quis eaque debitis quaerat
                porro repellat quas.
              </p>
              <Link href="">
                <FaLinkedin className="absolute bottom-5 left-5 text-3xl hover:-translate-y-1 ease-in duration-100 cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-4 relative">
            <Image
              src="/images/elonmusk.jpg"
              width={500}
              height={200}
              alt="Picture of Elon Musk"
              className="rounded-t-lg w-full h-[200px] object-cover"
            />
            <div className="p-5">
              <h6 className="text-sm text-cyan-600 font-normal">
                Senior Researcher
              </h6>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Dr Jenny Choo
              </h5>
              <p className="mb-10 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officiis obcaecati cupiditate quia eum quod, ea dolorum optio
                minima atque culpa fugit quo aliquam quis eaque debitis quaerat
                porro repellat quas.
              </p>
              <Link href="">
                <FaLinkedin className="absolute bottom-5 left-5 text-3xl hover:-translate-y-1 ease-in duration-100 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Research Students */}
      <section className="bg-slate-50 py-12 flex justify-center">
        <Tabs defaultValue="researchstudents">
          <TabsList className="flex space-x-4">
            <TabsTrigger
              value="researchstudents"
              className="font-semibold text-lg w-[600px]"
            >
              Research Students
            </TabsTrigger>
            <TabsTrigger
              value="alumni"
              className="font-semibold text-lg w-[600px]"
            >
              Alumni
            </TabsTrigger>
          </TabsList>

          {/* Research Students */}
          <TabsContent value="researchstudents">
            <ul className="grid grid-cols-3 gap-4">
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Johnathan Daniel Maxey</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Clarence Tay</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Arooj Zahra</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Christabel Sim</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Chance Sullivan</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Clement Sim</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Jonathan Lee</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Alwi Widyananda</Link>
                </Button>
              </li>
            </ul>
          </TabsContent>

          {/* Alumni */}
          <TabsContent value="alumni">
            <ul className="grid grid-cols-3 gap-4">
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Onn May Ling</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Natasha Nur Amarina Bt Mohd. Kaie</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Revadi Devi Thyartan</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Dr Jessica Song Xiaophing</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Dr Sim Chun Hock</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Eric Lau Ngie Hao</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Felicity Kuek Wen Ik</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Samson Lee Tze Hung</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Fiona Chung Yi Li</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Dr Edwin Sia Sien Aun</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Samantha Ambie</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Arnold Fidelis Ling</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Shirley Bong Wuan Lii</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Lew Yao Long</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Dr Noreha Binti Mahidi</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Dr Faddrine Holt Ajon Jang</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Elsa Cordelia</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Juliana Ho Sing Fang</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Angelica Fiona Tan</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Dr Ang Chung Huap</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Ishraq Rahman</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Syamil Sahar</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Ng Chiew Tyiin</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Kho Ik Hui</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Dr Nastassia Denis</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Florina Stephanie Richard</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-md">
                  <Link href="/">Julia Wee</Link>
                </Button>
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
