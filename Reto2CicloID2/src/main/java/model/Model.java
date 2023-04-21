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
    private int citedBy;

    public Model(String authorName, String authorId, int citedBy){

        this.authorName = authorName;
        this.authorId = authorId;
        this.citedBy = citedBy;
    }
}
