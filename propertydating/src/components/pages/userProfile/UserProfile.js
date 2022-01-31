export default function UserProfile() {
  return (
    <div>
      <h1>User Profile</h1>
      <img src="" />

      user_id VARCHAR(100) PRIMARY KEY NOT NULL,
            username VARCHAR(100) NOT NULL,
            password VARCHAR(100) NOT NULL,
            first_name VARCHAR(100) NOT NULL,
            last_name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            profile_pic VARCHAR(150) NOT NULL,
            liked_houses INT ARRAY DEFAULT array[]::INT[],
            settings_postcode VARCHAR(7) DEFAULT 'M17ED',
            settings_latitude DECIMAL DEFAULT '53.32500',
            settings_longitude DECIMAL DEFAULT '-2.66400',
            settings_radius INT DEFAULT '5',
            settings_price_min INT DEFAULT '0',
            settings_price_max INT DEFAULT '300000',
            settings_house_type VARCHAR(50) DEFAULT 'house'

      <form>
        <inpit placeholder="First Name" />
        <inpit placeholder="Last Name" />
        <inpit placeholder="Email" />
        <inpit placeholder="Postcode" />
        <inpit placeholder="Radius" />
        <inpit placeholder="Min Price" />
        <inpit placeholder="Max Price" />
        <inpit placeholder="House Type" />
      </form>
    </div>
  );
}
