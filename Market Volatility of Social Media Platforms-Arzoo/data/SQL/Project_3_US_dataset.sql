-- Drop tables if exist 
DROP TABLE IF EXISTS US_social_media_popularity;

-- Create tables and import data from the corresponding CSV files

CREATE TABLE US_social_media_popularity (	
    Date VARCHAR NOT NULL,
    Facebook DECIMAL NOT NULL,
    Printest DECIMAL NOT NULL,
	Twitter DECIMAL NOT NULL,
	StumbleUpon DECIMAL NOT NULL,
	reddit DECIMAL NOT NULL,
	Tumbler DECIMAL NOT NULL,
	YouTube DECIMAL NOT NULL,
	Instagram DECIMAL NOT NULL,
	LinkedIn DECIMAL NOT NULL,
	Digg DECIMAL NOT NULL,
	MySpace DECIMAL NOT NULL,
	Fark DECIMAL NOT NULL,
	"Google+" DECIMAL NOT NULL,
	NowPublic DECIMAL NOT NULL,
	"news.ycombinator.com" DECIMAL NOT NULL,
	Delicious DECIMAL NOT NULL,
	VKontakte DECIMAL NOT NULL,
	Vimeo DECIMAL NOT NULL,
	Other DECIMAL NOT NULL
);

SELECT *
FROM US_social_media_popularity;