CREATE TABLE media_reference (
	id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	media_id INT(10) NOT NULL,
	reference_id INT(10) NOT NULL,
	reference_type INT(10) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)