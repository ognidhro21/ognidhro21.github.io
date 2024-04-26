#!/bin/bash

# Function to convert time from HH:MM format to YYYYMMDDTHHMMSSZ format
convert_time() {
    local input_time=$1
    local day=$2
    local formatted_time=$(echo "$input_time" | sed 's/://g')
    echo "${day}T${formatted_time}00"
}

# Start and end dates for the recurring events
start_date="20240421"
end_date="20241024"

# Function to capitalize the first two letters of a string
capitalize() {
    local str=$1
    echo "${str:0:2}" | tr '[:lower:]' '[:upper:]'
}

# Function to calculate the start date for each day
calculate_start_date() {
    local current_date=$1
    local day_name=$2

    # Map day names to their numeric representation (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    declare -A day_map
    day_map=([Sunday]=0 [Monday]=1 [Tuesday]=2 [Wednesday]=3 [Thursday]=4 [Friday]=5 [Saturday]=6)

    # Calculate the number of days to add to reach the specified start day
    local start_day_numeric=${day_map[Sunday]}
    local current_day_numeric=${day_map[$day_name]}
    local days_to_add=$(( (start_day_numeric - current_day_numeric + 7) % 7 ))

    # If the start day is not Sunday, add the necessary days to reach Sunday
    if [ $days_to_add -ne 0 ]; then
        days_to_add=$(( 7 - days_to_add ))
    fi

    # Calculate and output the start date for the current day
    echo $(date -d "$current_date + $days_to_add days" +%Y%m%d)
}



# Function to convert JSON to iCalendar format
convert_to_ical() {
    echo "BEGIN:VCALENDAR"
    echo "VERSION:2.0"
    echo "PRODID:-//ChatGPT//JSON to iCal Converter//EN"

    # Loop through each day and its schedules
    echo "$json_data" | jq -r '.days[] | .name as $name | .schedules[] | "\($name) \(.code) \(.start) \(.end)"' |
    while read -r day_name code start_time end_time; do
        # Calculate the start date for the current day
        current_date=$(calculate_start_date "$start_date" "$day_name")

        start_datetime=$(convert_time "$start_time" "$current_date")
        end_datetime=$(convert_time "$end_time" "$current_date")

        echo "BEGIN:VEVENT"
        echo "DTSTART;TZID=Asia/Dhaka:$start_datetime"
        echo "DTEND;TZID=Asia/Dhaka:$end_datetime"
        echo "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=${end_date}T235959Z;BYDAY=$(capitalize "$day_name")"
        echo "DTSTAMP:$(date '+%Y%m%dT%H%M%SZ')"
        echo "UID:$(uuidgen)@example.com"
        echo "CREATED:$(date '+%Y%m%dT%H%M%SZ')"
        echo "LAST-MODIFIED:$(date '+%Y%m%dT%H%M%SZ')"
        echo "SEQUENCE:0"
        echo "STATUS:CONFIRMED"
        echo "SUMMARY:$code"
        echo "TRANSP:OPAQUE"
        echo "END:VEVENT"
    done

    echo "END:VCALENDAR"
}

# Read JSON data from file
json_data=$(cat "$1")

# Convert JSON to iCal format
convert_to_ical

