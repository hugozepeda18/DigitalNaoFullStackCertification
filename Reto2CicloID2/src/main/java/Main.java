import controller.Controller;

import java.util.Scanner;

public class Main {
    public static void main(String[] arf){
        System.out.println("Por favor escribe la letra inicial de un autor o el nombre");
        Scanner in = new Scanner(System.in);

        String s = in.nextLine();
        Controller controller = new Controller(s);
        controller.makeRequest();
    }
}
