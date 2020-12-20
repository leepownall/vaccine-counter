import { useEffect, useState } from 'react'

export default function Vaccinations() {
    let [vaccinations, setVaccinations] = useState()

    function calculateVaccinations () {
        let ratePerSecond = 137897 / (7 * 24 * 60 * 60)
        let firstVaccineDate = new Date(2020, 11, 8, 10, 0, 0, 0)
        let sinceFirstVaccine = (Date.now() - firstVaccineDate.getTime()) / 1000

        return Math.round(sinceFirstVaccine * ratePerSecond, 0).toLocaleString('en')
    }

    useEffect(() => {
        setInterval(() => {
            setVaccinations(calculateVaccinations())
        })
    })

    return (
        <div className="font-semibold text-4xl h-10 block">{vaccinations}</div>
    )
}