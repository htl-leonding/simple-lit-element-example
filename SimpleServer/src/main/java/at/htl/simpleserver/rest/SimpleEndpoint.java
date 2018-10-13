package at.htl.simpleserver.rest;

import at.htl.simpleserver.data.Repository;

import javax.json.JsonObject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("data")
public class SimpleEndpoint {

    List<JsonObject> data;

    public SimpleEndpoint() {
        data = Repository.getInstance();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<JsonObject> findAll() {
        return data;
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response save(JsonObject item) {
        System.out.println(item.toString());
        data.add(item);
        return Response.accepted().entity(item).build();
    }


}
