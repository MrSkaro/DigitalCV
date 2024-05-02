import Image from "next/image";
import Link from "next/link"
import DescriptionMap from "../components/DescriptionMap"

function SectionHeaderText(props) {
  const { children } = props
  return(
    <h4 className='pb-5 text-xl font-semibold text-slate-200'>{children}</h4>
  )
}

export default function Home() {
  const links = [
    {name: 'Email', link: '', content: 'hello@bigtomcodes.com'},
    {name: 'Github', link: 'https://github.com/MrSkaro', content: 'MrSkaro'},
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/tom-simpson-20505545/', content: 'tom-simpson-20505545'}
  ]

  const skills = [
    {name: 'JavaScript', content: ['React', 'Node.js']},
    {name: 'Python', content: ['Data Analysis', 'Django', 'Flask', 'Data Visualisation']},
    {name: 'Web', content: ['TailwindCSS', 'Netlify', 'NoSQL', 'SQL', 'GIT']}
  ]

  const work = [
    {name: 'The Barbican arts centre (2019-present)', content: 'Sound engineer at Europe\'s premier arts centre'},
    {name: 'Freelance sound engineer (2015-present)', content: 'Sound engineer at various prestigious venues around London'}
  ]

  const hobbies = [
    {name: 'Gym and Cycling', content: 'I commute 20 miles and back on my bike and fit the gym in when I can'},
    {name: 'Tabletop wargaming and boardgames', content: 'I play Warhammer to a competitive level but also enjoy boardgames at home with friends'},
    {name: 'Spanish Linguist', content: 'I practice my language skills whenever I get an opportunity'}
  ]

  return (
    <main className='flex flex-col gap-5 p-4 mx-auto max-w-[900px] w-full'>
      <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl text-slate-200 sm:py-4 md:py-6'>Digital CV</h2>
      <SectionHeaderText className=''>Tom Simpson - Web Developer</SectionHeaderText>
      <section>
        <DescriptionMap list={links} type={"links"} />
      </section>
      <section>
        <SectionHeaderText>Skills</SectionHeaderText>
        <DescriptionMap list={skills} type={"skills"} />
      </section>
      <section>
        <SectionHeaderText>Projects</SectionHeaderText>
        <p className='text-xs sm:text-sm'>Check out my latest <Link href={'/projects'} className='cursor-pointer text-green-400'>projects</Link></p>
      </section>
      <section>
        <SectionHeaderText>Work History</SectionHeaderText>
        <DescriptionMap list={work} type={"work"} />
      </section>
      <section>
        <SectionHeaderText>Just for fun</SectionHeaderText>
        <DescriptionMap list={hobbies} type={"hobbies"} />
      </section>
    </main>
  );
}
