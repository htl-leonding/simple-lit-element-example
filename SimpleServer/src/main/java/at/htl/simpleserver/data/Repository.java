package at.htl.simpleserver.data;

import javax.inject.Singleton;
import javax.json.Json;
import javax.json.JsonObject;
import java.util.LinkedList;
import java.util.List;

@Singleton
public class Repository {


    private static final List<JsonObject> INSTANCE = new LinkedList<>();

    private Repository() { }

    public static List<JsonObject> getInstance() {
        if (INSTANCE.size() == 0) {
            JsonObject obj = Json.createObjectBuilder().add("name", "Susi").build();
            INSTANCE.add(obj);
        }
        return INSTANCE;
    }
}
