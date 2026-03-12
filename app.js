var auto = {
    "marka": "Ford",
    "model": "Focus",
    "rokProdukcji": 2020,
    "przebieg": 10000,
    "silnik": {
        "moc": 100,
        "pojemnosc": 1800,
    }
}

auto.przebieg += 1000

var klasa = {
    "nazwa": "1PRO",
    "wychowawca": "Anita Guła",
    "uczniowie": {
        "uczen1": {
            "imie": "Jan",
            "nazwisko": "Kowalski",
            "wiek": 16,
            "wyniki": {
                "frekwencja": 80,
                "srednia": 4.50,
            }
        },
        "uczen2": {
            "imie": "Anna",
            "nazwisko": "Nowak",
            "wiek": 15,            
            "wyniki": {
                "frekwencja": 90,
                "srednia": 5.00,
            }
        }
    }
}

console.log(klasa);
