import time 

class ussd():

    introMenu = 'Bienvenido a nuestro menú telefónico'
    usuarios = [
        {
            "usrAccount": 1,
            "nombre": "Juan Perez",
            "saldo": -50,
        },
        {
            "usrAccount": 2,
            "nombre": "Francisco Ozuna",
            "saldo": 50,
        },
        {
            "usrAccount": 3,
            "nombre": "Hugo Alberto",
            "saldo": 50,
        },
    ]

    def __init__(self) -> None:
        print(self.introMenu)

    def decisionThree(self) -> None:
        enterMenu = False
        currentAccount = ''
        while(True):
            if not enterMenu:
                newAccount = input('Tiene una cuenta con nosotros? 1: Yes 2: No \n')
                if (newAccount == '2'):
                    nombre = input('Por favor escriba su nombre: \n')
                    print('Su número de cuenta es', len(self.usuarios) + 1)
                    self.usuarios.append({
                        "usrAccount": len(self.usuarios) + 1,
                        "nombre": nombre,
                        "saldo": 0
                    })
                user = input('Introduzca su número de cuenta: \n')
                if (self._findUser(user)):
                    currentAccount = user
                    usuario = self._returnUser(currentAccount)
                    print('Welcome', usuario["nombre"])
                    currentAccount = user
                    enterMenu = True
                else :
                    print('Algo está mal en su número de cuenta o su usuario no existe.\n')
            if enterMenu:
                option = input('Qué opción desea seleccionar? \n Seleccione \n 1: Saber el saldo de su cuenta \n 2: Hacer una aclaración de su cuenta \n 3: Borrar su cuenta \n 4: Salir \n')
                if (option == '1'):
                    print('Saldo actual: ', self._findUserSaldo(currentAccount))
                elif (option == '2'):
                    print('Se le dirigira con un agente, espere en la línea \n')
                    print('Waiting for agent! \n')
                    time.sleep(5)
                    break                    
                elif (option == '3'):
                    usuario = self._returnUser(currentAccount)
                    self.usuarios.pop(int(usuario["usrAccount"]) - 1)
                    print('Su cuenta se eliminó')
                    enterMenu = False
                    currentAccount = ''
                elif (option == '4'):
                    enterMenu = False
                    currentAccount = ''
                    break
                else :
                    print('Elija una opción correcta.\n')

    def _findUser(self, accountNumber) -> bool:
        for idx, i  in enumerate(self.usuarios):
            if (i["usrAccount"] == int(accountNumber)):
                return True
        return False
    
    def _returnUser(self, accountNumber) -> object:
        for idx, i  in enumerate(self.usuarios):
            if (i["usrAccount"] == int(accountNumber)):
                return i
        return {}

    def _findUserSaldo(self, accountNumber) -> int:
        for idx, i  in enumerate(self.usuarios):
            if (i["usrAccount"] == int(accountNumber)):
                return i["saldo"]
        return 0
        

if __name__ == '__main__':
    app = ussd()
    app.decisionThree()