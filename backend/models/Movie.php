<?php
    class Movie {
        private $conn;
        private $table = 'movie';

        public $id;
        public $title;
        public $description;
        public $year;
        public $poster;
        public $searchQuery;

        public function __construct($db)
        {
            $this->conn = $db;
        }

        // Get all movie records
        public function read() {
            // create query
            try{
            $query = 'SELECT * from ' . $this->table . ' r';
            $stmt = $this->conn->prepare($query);

            // Execute query
            $stmt->execute();
            return $stmt;
            }catch (Exception  $e){
                 http_response_code(503);
                echo  "Exception occurred"."<br>";
                }
            
        }

        // Get specific movie by id
        public function readById() {
            // create query
           try{
            $query = 'SELECT * from ' . $this->table . ' ri where ri.id=? limit 0,1';
            $stmt = $this->conn->prepare($query);

            // Bind Id
            $stmt->bindParam(1, $this->id);

            // Execute query
            $stmt->execute();
            //fetch query to row
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            // Set data
            $this->id = $row['id'];
            $this->title = $row['title'];
            $this->description = $row['description'];
            $this->year = $row['year'];
            $this->poster = $row['poster'];
            //return
            return $stmt;
        }catch (Exception  $e){
            http_response_code(503);
           echo  "Exception occurred"."<br>";
           }
        }

        // Create The Movie
        public function create() {
            // create query
            try{
            $query = 'insert into ' . $this->table . ' (title,description,year,poster) values(:title,:description,:year,:poster);';

            // Prepare statement
            $stmt = $this->conn->prepare($query);

            // Clean data
            $this->title = htmlspecialchars(strip_tags($this->title));
            $this->description = htmlspecialchars(strip_tags($this->description));
            $this->year = htmlspecialchars(strip_tags($this->year));
            $this->poster = htmlspecialchars(strip_tags($this->poster));

            // Bind the data
            $stmt->bindParam(':title', $this->title);
            $stmt->bindParam(':description', $this->description);
            $stmt->bindParam(':year', $this->year);
            $stmt->bindParam(':poster', $this->poster);

            // Execute query
            $stmt->execute();
        }catch (Exception  $e){
            http_response_code(503);
           echo  "Exception occurred"."<br>";
           }
            
        }

        // Search Movies
        public function search() {
            // create query
            try{
            $query = 'select * from ' . $this->table . ' where title=:title or year=:year';

            // Prepare statement
            $statement = $this->conn->prepare($query);

            // Bind the data
            if (isset($this->searchQuery)) {
                $statement->bindParam(':title', $this->searchQuery);
                $statement->bindParam(':year', $this->searchQuery);
            } else {
                $query = 'select * from ' . $this->table;
            }

            // Execute query
            $statement->execute();

            return $statement;
        }catch (Exception  $e){
            http_response_code(503);
           echo  "Exception occurred"."<br>";
           }
        }


        // Update Movie
        public function update(){
            try{
            // create query
            $sql = 'update ' . $this->table . ' set title=:title, description=:description, year=:year, poster=:poster where id=:id;';
            $stmt = $this->conn->prepare($sql);

            // Clean data (for security)
            $this->id = htmlspecialchars(strip_tags($this->id));
            $this->title = htmlspecialchars(strip_tags($this->title));
            $this->description = htmlspecialchars(strip_tags($this->description));
            $this->year = htmlspecialchars(strip_tags($this->year));
            $this->poster = htmlspecialchars(strip_tags($this->poster));
            // Bind the data
            $stmt->bindParam(':id', $this->id);
            $stmt->bindParam(':title', $this->title);
            $stmt->bindParam(':description', $this->description);
            $stmt->bindParam(':year', $this->year);
            $stmt->bindParam(':poster', $this->poster);


            // Execute query
            if ($stmt->execute()) {
                return true;
            } else {
                printf("Error: %s.\n", $stmt->error);
                return false;
            }
        }catch (Exception  $e){
            http_response_code(503);
           echo  "Exception occurred"."<br>";
           }

        }

        // Delete Movies
        public function delete() {
            try{
            // create query
            $query = 'DELETE FROM '.$this->table.' WHERE id=:id;';
            $stmt = $this->conn->prepare($query);

            // Bind Id
            $stmt->bindParam(":id", $this->id);

            // Execute query
            $stmt->execute();

            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);

            return $stmt;
        }catch (Exception  $e){
            http_response_code(503);
           echo  "Exception occurred"."<br>";
           }
        }

    }