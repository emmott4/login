public function getInitialsAttribute() {
    $nameWords = explode(" ", $this->name);
    $initials =  $nameWords[0][0];
    if(count($nameWords) > 1) {
        $initials = $initials . $nameWords[1][0];
    }
    return $initials;
}