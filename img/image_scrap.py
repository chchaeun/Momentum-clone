import requests
from bs4 import BeautifulSoup

url = "https://unsplash.com/s/photos/city-desktop-wallpaper"
headers = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"}
res = requests.get(url, headers=headers)
res = requests.get(url)
res.raise_for_status()

soup = BeautifulSoup(res.text, "html.parser")
images = soup.find_all("img", attrs={"class":"_2UpQX"})
print(images)

for idx, image in enumerate(images):
    if idx>=3:
        break

    image_url = image["src"];

    image_res = requests.get(image_url, headers=headers)
    image_res.raise_for_status()

    with open("img/{}.jpg".format(idx), "wb") as f:
        f.write(image_res.content);
