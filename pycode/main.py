import phonenumbers
from phonenumbers import timezone
import requests

# Ask the user for phone number
number = input("Enter the phone number with country code: ")



try:
    # Parsing String to the Phone number
    phoneNumber = phonenumbers.parse(number)

    # printing the timezone using the timezone module
    timeZone = timezone.time_zones_for_number(phoneNumber)
    print(f"Timezone: {timeZone}")

    # Query NumVerify API for more detailed information
    response = requests.get(f"http://apilayer.net/api/validate?access_key=&number={number}&country_code=&format=1")
    data = response.json()

    if data["valid"]:
        location_info = data["location"]
        city = location_info["city"]
        country = location_info["country"]
        print(f"Location: {city}, {country}")
        print(f"Service Provider: {data['carrier']}")
    else:
        print("Invalid phone number")



except phonenumbers.phonenumberutil.NumberParseException as e:
    print("Error:", e)
