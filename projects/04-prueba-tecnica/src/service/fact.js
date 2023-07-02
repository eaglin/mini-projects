export const getRandomFact = () => {

    return fetch('https://catfact.ninja/fact').then((value) =>

        (value.json()).then(
            cat => {
                return cat.fact
            }
        )
    )
}