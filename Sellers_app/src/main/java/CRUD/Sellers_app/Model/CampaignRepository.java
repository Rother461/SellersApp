package CRUD.Sellers_app.Model;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource
public interface CampaignRepository extends JpaRepository<Campaign,Integer> {
    Optional<Campaign> findById(Integer id);
    List<Campaign> findAll();


}
