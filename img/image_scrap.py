import requests
from bs4 import BeautifulSoup

url = "https://unsplash.com/s/photos/city-desktop-wallpaper"
res = requests.get(url)
res.raise_for_status()

soup = BeautifulSoup(res.text, "html.parser")
images = soup.find_all("img", attrs={"class":"_2UpQX"})

for idx, image in enumerate(images):
    if(idx>10):
        break

    image_url = image["src"];

    image_res = requests.get(image_url)
    image_res.raise_for_status()

    with open("img/{}.jpg".format(idx), "wb") as f:
        f.write(image_res.content);
