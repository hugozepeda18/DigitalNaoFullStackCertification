class ahorcado():

    introMenu = 'Bienvenido a nuestro juego de ahorcado'
    palabras = ['azul', 'ornitorrinco', 'anticonstitucionalidad']
    vidas = 3

    def __init__(self) -> None:
        print(self.introMenu)

    def decisionThree(self) -> None:
        dificultad = input('Qué dificultad le gustaria escoger? \n1: Fácil\n2: Normal\n3: Difícil\n')
        if (dificultad == '1'):
            palabraElegida = self.palabras[int(dificultad) - 1]
            palabraFinal = palabraElegida
            print('Su palabra tiene ', len(palabraElegida), ' letras \n')
            while(self.vidas > 0):
                letra = input('Escriba una letra: \n')
                if (palabraElegida.find(letra) != -1):
                    palabraElegida = palabraElegida.replace(letra, '')
                    print('Aún faltan :', len(palabraElegida), ' letras')
                else: 
                    self.vidas -= 1
                    print('Perdiste una vida, te quedan ', self.vidas)
                    if (self.vidas == 0):
                        print('Lo siento has perdido, intentalo de nuevo')
                        break
                if (len(palabraElegida) == 0):
                    print('Felicidades ganaste!')
                    print('Su palabra era', palabraFinal)
                    break
        elif (dificultad == '2'):
            palabraElegida = self.palabras[int(dificultad) - 1]
            print('Su palabra tiene ', len(palabraElegida), ' letras \n')
            while(self.vidas > 0):
                letra = input('Escriba una letra: \n')
                if (palabraElegida.find(letra) != -1):
                    palabraElegida = palabraElegida.replace(letra, '')
                    print('Aún faltan :', len(palabraElegida), ' letras')
                else: 
                    self.vidas -= 1
                    print('Perdiste una vida, te quedan ', self.vidas)
                    if (self.vidas == 0):
                        print('Lo siento has perdido, intentalo de nuevo')
                        break
                if (len(palabraElegida) == 0):
                    print('Felicidades ganaste!')
                    print('Su palabra era', palabraFinal)
                    break
        else:
            palabraElegida = self.palabras[int(dificultad) - 1]
            print('Su palabra tiene ', len(palabraElegida), ' letras \n')
            while(self.vidas > 0):
                letra = input('Escriba una letra: \n')
                if (palabraElegida.find(letra) != -1):
                    palabraElegida = palabraElegida.replace(letra, '')
                    print('Aún faltan :', len(palabraElegida), ' letras')
                else: 
                    self.vidas -= 1
                    print('Perdiste una vida, te quedan ', self.vidas)
                    if (self.vidas == 0):
                        print('Lo siento has perdido, intentalo de nuevo')
                        break
                if (len(palabraElegida) == 0):
                    print('Felicidades ganaste!')
                    print('Su palabra era', palabraFinal)
                    break

if __name__ == '__main__':
    app = ahorcado()
    app.decisionThree()
    