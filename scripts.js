document.addEventListener('DOMContentLoaded', function () {
    const convertButton = document.querySelector(".convert-button");
    const currencySelect = document.querySelector(".currency-select");
    const currencySelectConvert = document.querySelector(".currency-select-converter");

    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");
    const currencyNameConvert = document.getElementById("currency-name-convert");
    const currencyImageConvert = document.querySelector(".currency-img-convert");


    const convertValues = async () => {
        const inputCurrencyValue = document.querySelector(".input-currency").value

        const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor a converter

        const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

      

        const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(Response => Response.json())

        const taxaCambio = {
            dolar: data.USDBRL.high,
            euro: data.EURBRL.high,
            bitcoin: data.BTCBRL.high,
            real: 1
        }

        const fromCurrency = currencySelect.value;
        const toCurrency = currencySelectConvert.value;

        const convertedValue = inputCurrencyValue * (taxaCambio[toCurrency] / taxaCambio[fromCurrency]);

        if (currencySelectConvert.value == "real") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {

                style: "currency",
                currency: "BRL"

            }).format(inputCurrencyValue)
        }
        if (currencySelectConvert.value == "dolar") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {

                style: "currency",
                currency: "USD"

            }).format(inputCurrencyValue)
        }
        if (currencySelectConvert.value == "euro") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {

                style: "currency",
                currency: "EUR"

            }).format(inputCurrencyValue)
        }

        if (currencySelectConvert.value == "bitcoin") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {

                style: "currency",
                currency: "BTC"

            }).format(inputCurrencyValue)
        }



        if (currencySelect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {

                style: "currency",
                currency: "USD"

            }).format(convertedValue)
        }
        if (currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {

                style: "currency",
                currency: "EUR"

            }).format(convertedValue)
        }
        if (currencySelect.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {

                style: "currency",
                currency: "BTC"

            }).format(convertedValue)
        }
        if (currencySelect.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {

                style: "currency",
                currency: "BRL"

            }).format(convertedValue)
        }
    };

    currencySelect.addEventListener("change", function () {

        if (currencySelect.value == "dolar") {
            currencyName.innerHTML = "Dólar americano"
            currencyImage.src = "./assets/Dolar.png"
        }
        if (currencySelect.value == "euro") {
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./assets/euro.png"
        }
        if (currencySelect.value == "bitcoin") {
            currencyName.innerHTML = "Bitcoin"
            currencyImage.src = "./assets/bitcoin.png"
        }
        if (currencySelect.value == "real") {
            currencyName.innerHTML = "Real"
            currencyImage.src = "./assets/Real.png"
        }
        convertValues()
    });

    currencySelectConvert.addEventListener("change", function () {

        if (currencySelectConvert.value == "dolar") {
            currencyNameConvert.innerHTML = "Dólar americano"
            currencyImageConvert.src = "./assets/Dolar.png"
        }
        if (currencySelectConvert.value == "euro") {
            currencyNameConvert.innerHTML = "Euro"
            currencyImageConvert.src = "./assets/euro.png"
        }
        if (currencySelectConvert.value == "real") {
            currencyNameConvert.innerHTML = "Real"
            currencyImageConvert.src = "./assets/Real.png"
        }
        if (currencySelectConvert.value == "bitcoin") {
            currencyNameConvert.innerHTML = "Bitcoin"
            currencyImageConvert.src = "./assets/bitcoin.png"
        }
        convertValues()
    });

    convertButton.addEventListener("click", convertValues)


});

