package Ad.service.Iservice;

import java.util.ArrayList;

import Ad.model.AdView;

public interface IadViewService {

	ArrayList<AdView> getAds();

	boolean add(AdView a);

	String isLocationAvailable(int location);
}