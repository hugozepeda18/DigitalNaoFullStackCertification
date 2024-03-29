package controller;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import model.Model;
import serpapi.GoogleSearch;
import serpapi.SerpApiSearchException;
import vista.Vista;

import java.util.HashMap;
import java.util.Map;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class Controller {

    private String authorLetter;
    private String API_KEY = "bdaa8df2186553a5ed994f981ad79f5257c3e675ba6321931e03dd0f5c0a4ee4";

    private String DB_URL = "jdbc:mysql://localhost:3306/author";
    private String USER = "root";
    private String PASS = "root";

    public Controller(String letter) {
        System.out.printf("La letra o nombre del autor es %s", letter);
        System.out.println();
        this.authorLetter = letter;
    }

    public void makeRequest(){
        Map<String, String> parameter = new HashMap<>();
        parameter.put("engine", "google_scholar_profiles");
        parameter.put("mauthors", this.authorLetter);
        parameter.put("api_key", API_KEY);

        GoogleSearch search = new GoogleSearch(parameter);
        try
        {
            JsonObject results = search.getJson();
            JsonArray result = (JsonArray) results.get("profiles");
            JsonObject first_result = result.get(0).getAsJsonObject();
            Model model = new Model(first_result.get("name").getAsString(),
                    first_result.get("author_id").getAsString(),
                    first_result.get("affiliations").getAsString(),
                    first_result.get("cited_by").getAsInt());
            Vista vista = new Vista(model.getAuthorName(), model.getAuthorId(), model.getAfiliaciones(), model.getCitedBy());
            vista.printVista();
            System.out.println("Connecting database...");
            try(Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
                Statement stmt = conn.createStatement();
            ) {
                // Execute a query
                System.out.println("Inserting records into the table...");
                String sql = "INSERT INTO newauthor VALUES ('" + model.getAuthorId() +
                        "','" + model.getAuthorName() + "','" +
                        model.getAfiliaciones() + "'," +  Integer.toString(model.getCitedBy()) +")";
                System.out.println(sql);
                stmt.executeUpdate(sql);
                System.out.println("Inserted record into the table...");
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        catch (SerpApiSearchException ex)
        {
            Model model = new Model("", "", "", 0);
            System.out.println("Exception:");
            System.out.println(ex);
        }

    }
}
