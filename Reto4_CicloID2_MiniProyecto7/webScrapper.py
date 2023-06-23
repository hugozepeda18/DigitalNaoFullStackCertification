from bs4 import BeautifulSoup

class webScrapper():

    def __init__(self) -> None:
        soup = BeautifulSoup("<p>Some<b>bad<i>HTML", features="html.parser")  
        print(soup.prettify())
        print(soup.find(string="bad"))
        print('-------------------')
    
    def scrappingHTML(self) -> None:
        with open('index.html', 'r') as f:
            html_string = f.read()
            soup = BeautifulSoup(html_string, features="html.parser")  
            print(soup.prettify())
            print('-------------------')
            print(soup.find_all('a'))
            print('-------------------')
            for link in soup.find_all('a'):
                print(link.get('href'))

if __name__ == "__main__":
    app = webScrapper()
    app.scrappingHTML()
