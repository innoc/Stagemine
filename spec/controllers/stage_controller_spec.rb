require "rails_helper"

describe StageController do
  describe "non-user routing to the /stage path" do
    it "should be redirected to the different page" do 
      get :stage
      expect(response.status).to eq(302)
    end
  end

  describe "enrolled user routing to the /stage path" do 
    it "should be routed to the stage page" do
      user = create(:user)
      session[:user_id] = user.id
      get :stage
      expect(response.status).to eq(200)
    end
  end

  describe "" do 
    it "a league should be done" do 
      get :legue
      expect(response.status).to eq(200)
    end
  end
end