package vista;

public class Vista {

    public Vista(String author, String id, int citedBy) {
        this.author = author;
        this.id = id;
        this.citedBy = citedBy;
    }

    public void printVista(){
        System.out.printf("El nombre del autor más famoso es: %s", getAuthor());
        System.out.println();
        System.out.printf("El ID del autor es: %s", getId());
        System.out.println();
        System.out.printf("El autor ha sido citado: %d", getCitedBy());
        System.out.println();
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setCitedBy(int citedBy) {
        this.citedBy = citedBy;
    }

    public String getAuthor() {
        return author;
    }

    public String getId() {
        return id;
    }

    public int getCitedBy() {
        return citedBy;
    }

    private String author;
    private String id;
    private int citedBy;

}
