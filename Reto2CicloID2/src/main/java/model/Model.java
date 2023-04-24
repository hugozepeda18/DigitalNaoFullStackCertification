package model;

public class Model {

    public String getAuthorName() {
        return authorName;
    }

    public String getAuthorId() {
        return authorId;
    }

    public int getCitedBy() {
        return citedBy;
    }

    private String authorName;
    private String authorId;

    public String getAfiliaciones() {
        return afiliaciones;
    }

    public void setAfiliaciones(String afiliaciones) {
        this.afiliaciones = afiliaciones;
    }

    private String afiliaciones;
    private int citedBy;

    public Model(String authorName, String authorId, String afiliaciones, int citedBy){

        this.authorName = authorName;
        this.authorId = authorId;
        this.afiliaciones = afiliaciones;
        this.citedBy = citedBy;
    }
}
