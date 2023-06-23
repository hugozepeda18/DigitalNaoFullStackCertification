class numeroPalabras():

    numeroEnPalabras = ''

    def writingNumber(self):
        while(True):
            self.numeroEnPalabras = input("Enter the number in words you want to write: ")
            print('El número en palabras es:', self.numeroEnPalabras)
            var = input('Would you like to write another one? Yes: 1 or No: 2 ')
            if var == '2':
                break

if __name__ == "__main__":
    app = numeroPalabras()
    app.writingNumber()
