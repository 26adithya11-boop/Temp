import Array "mo:core/Array";
import Text "mo:core/Text";
import Order "mo:core/Order";

actor {
  type ConsultantProfile = {
    name : Text;
    phone : Text;
    email : Text;
    tagline : Text;
  };

  type Service = {
    name : Text;
    description : Text;
    category : Text;
  };

  module Service {
    public func compareByCategoryName(service1 : Service, service2 : Service) : Order.Order {
      switch (Text.compare(service1.category, service2.category)) {
        case (#equal) { service1.name.compare(service2.name) };
        case (order) { order };
      };
    };
  };

  let consultantProfile : ConsultantProfile = {
    name = "John Doe";
    phone = "+1-555-123-4567";
    email = "john.doe@email.com";
    tagline = "Your trusted business consultant";
  };

  let services : [Service] = [
    {
      name = "Business Strategy";
      description = "Expert guidance to help your business grow and compete effectively.";
      category = "Strategy";
    },
    {
      name = "Financial Planning";
      description = "Comprehensive financial analysis and planning services.";
      category = "Finance";
    },
    {
      name = "Project Management";
      description = "Efficient project planning and execution support.";
      category = "Operations";
    },
    {
      name = "Marketing Consulting";
      description = "Market analysis and strategy development for increased outreach.";
      category = "Marketing";
    },
    {
      name = "Risk Assessment";
      description = "Identifying and managing business risks efficiently.";
      category = "Risk Management";
    },
  ];

  public query ({ caller }) func getConsultantProfile() : async ConsultantProfile {
    consultantProfile;
  };

  public query ({ caller }) func getAllServices() : async [Service] {
    services;
  };

  public query ({ caller }) func getServicesByCategory() : async [Service] {
    services.sort(Service.compareByCategoryName);
  };
};
