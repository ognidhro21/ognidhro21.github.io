# Read the JSON file
json=$(cat your_json_file.json)

# Extract events for the specified group from both parent section and group
group_name="$1"
parent_events=$(echo "$json" | jq -r --arg group "$group_name" '.sections[] | select(.groups[].name == $group) | .days[]')
group_events=$(echo "$json" | jq -r --arg group "$group_name" '.sections[].groups[] | select(.name == $group) | .days[]')

# Uppercase the code field of parent events
parent_events_uppercased=$(echo "$parent_events" | jq '.schedules[] |= (.code |= ascii_upcase)')

# Append "PRACTICAL" to the code field of group events
group_events_with_practical=$(echo "$group_events" | jq '.schedules[] |= (.code |= ascii_upcase + "-PRACTICAL")')

# Combine parent and modified group events
all_days=$(echo "$parent_events_uppercased" "$group_events_with_practical" | jq -s '
    group_by(.name)
    | map({
        name: .[0].name,
        schedules: map(.schedules[])
    })
')

# Print the merged events
echo "{\"name\": \"$group_name\", \"days\": $all_days}" > "$1.json"

