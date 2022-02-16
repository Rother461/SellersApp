package Futurum.Sellers_app.Controllers;

import Futurum.Sellers_app.Model.Campaign;
import Futurum.Sellers_app.Model.CampaignRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping
public class CampaignController {
    private CampaignRepository campaignRepository;
    private budgetController budgetController;

    public CampaignController(CampaignRepository campaignRepository,budgetController budgetController) {
        this.campaignRepository = campaignRepository;
        this.budgetController=budgetController;
    }


  @GetMapping(value = "/campaigns")
  ResponseEntity<List<Campaign>> readAll()
  {

      return ResponseEntity.ok(campaignRepository.findAll());
  }
  @PostMapping("/campaigns")
    public ResponseEntity<Object> createCamp(@RequestBody Campaign newCampaign)
  {
      budgetController.updateBalance(newCampaign.getCampaignFund());
        if(newCampaign.getBidAmount()<200) {

            return ResponseEntity.badRequest().build();
        }else
            return ResponseEntity.ok(campaignRepository.save(newCampaign));
  }
  @GetMapping(value = "/campaigns/{id}")
    public Campaign readById(@PathVariable int id)
  {
      return campaignRepository.findById(id).get();
  }

  @PutMapping(value = "/campaigns/{id}")
    ResponseEntity<List<Campaign>> updateCampaign( @PathVariable int id,@RequestBody Campaign newCampaign)
  {
      if(!campaignRepository.existsById(id))
      {
          return ResponseEntity.notFound().build();
      }
       campaignRepository.findById(id).ifPresent(campaign -> {
          campaign.updateFrom(newCampaign);

          campaignRepository.save(campaign);
      });
      return ResponseEntity.noContent().build();
  }
  @DeleteMapping(value = "/campaigns/{id}")
    void deleteCampaign(Campaign newCampaign,@PathVariable int id)
  {
      campaignRepository.deleteById(id);
  }





}
