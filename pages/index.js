import Vaccinations from '../components/vaccinations'
import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Vaccine Counter</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <div className="bg-gray-800 antialiased text-white">
                <div className="container h-screen mx-auto flex flex-col space-y-6 p-8 text-center">
                    <h1 className="font-semibold text-4xl">Vaccine Counter</h1>
                    <main className="flex-grow flex flex-col space-y-2">
                        <p>In the UK about</p>
                        <Vaccinations/>
                        <p>people have been vaccinated against Covid-19.</p>
                    </main>
                    <footer className="place-self-end">
                        <p>
                            The UK data is extrapolated from <a href="https://www.gov.uk/government/news/more-than-137000-people-in-uk-receive-first-dose-of-covid-vaccine-in-one-week" target="_blank" className="underline">this UK government announcement</a> and will be
                            updated when a trustworthy announcement is next made. Statements by members of the UK government are not trustworthy alone.
                        </p>
                        <p className="mt-4">
                            Actual data, not just a little ticker can be found via <a href="https://ourworldindata.org/covid-vaccinations" target="_blank" className="underline">Our World in Data's vaccinations page</a>.
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    )
}
