package CRUD.Sellers_app.Model;

import javax.persistence.*;

@Entity
@Table(name = "campaign")

public class Campaign {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
   // @NotBlank(message = "campaignName must be not null ")
    private String campaignName;
    private String keywords;
    private Float bidAmount;
    private Float campaignFund;
    private String status;
    private String town;
    private Float radius;

    public Campaign(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCampaignName() {
        return campaignName;
    }

    public void setCampaignName(String campaignName) {
        this.campaignName = campaignName;
    }

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    public Float getBidAmount() {
        return bidAmount;
    }

    public void setBidAmount(Float bidAmount) {
        this.bidAmount = bidAmount;
    }

    public Float getCampaignFund() {
        return campaignFund;
    }

    public void setCampaignFund(Float campaignFund) {
        this.campaignFund = campaignFund;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public Float getRadius() {
        return radius;
    }

    public void setRadius(Float radius) {
        this.radius = radius;
    }


    public void updateFrom(final Campaign source)
    {
       campaignName = source.campaignName;
        keywords = source.keywords;
        bidAmount = source.bidAmount;
        campaignFund = source.campaignFund;
        status = source.status;
        town = source.town;
        radius = source.radius;

    }

}
