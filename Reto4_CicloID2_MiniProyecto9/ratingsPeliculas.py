class ratingPeliculas():

    introMenu = 'Bienvenido a nuestro rating de peliculas, actualmente contamos con: '
    peliculas = [
        {
            "pelicula": "Titanik",
            "calificacion": 86,
        },
        {
            "pelicula": "Spiderman: Un nuevo universo",
            "calificacion": 100,
        },
        {
            "pelicula": "Spiderman: Cruzando el Multiverso",
            "calificacion": 100,
        },
    ]

    def __init__(self) -> None:
        print(self.introMenu, len(self.peliculas))

    def decisionThree(self) -> None:
        while(True):
            option = input('Qué opción desea seleccionar? \n Seleccione \n 1: Ver todos los raiting \n 2: Salir\n')
            if (option == '1'):
                for i in self.peliculas:
                    print('Pelicula: ', i['pelicula'])
                    print('Calificación', i['calificacion'])
            else :
                break

if __name__ == '__main__':
    app = ratingPeliculas()
    app.decisionThree()