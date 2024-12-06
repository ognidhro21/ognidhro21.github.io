import json
import sys
from datetime import datetime, timedelta, timezone
import uuid

def read_json_file(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

def convert_time(input_time, day):
    formatted_time = input_time.replace(':', '')
    return f"{day}T{formatted_time}00"

def capitalize(day_name):
    return day_name[:2].upper()

def calculate_start_date(current_date, day_name):
    day_map = {
        "Sunday": 0,
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6
    }
    start_day_numeric = day_map["Sunday"]
    current_day_numeric = day_map[day_name]
    days_to_add = (start_day_numeric - current_day_numeric + 7) % 7

    if days_to_add != 0:
        days_to_add = 7 - days_to_add

    start_date = datetime.strptime(current_date, "%Y%m%d") + timedelta(days=days_to_add)
    return start_date.strftime("%Y%m%d")

def convert_to_ical(json_data, start_date, end_date):
    ical_data = []
    ical_data.append("BEGIN:VCALENDAR")
    ical_data.append("VERSION:2.0")
    ical_data.append("PRODID:-//ChatGPT//JSON to iCal Converter//EN")

    for day in json_data['days']:
        day_name = day['name']
        for schedule in day['schedules']:
            code = schedule['code']
            start_time = schedule['start']
            end_time = schedule['end']

            current_date = calculate_start_date(start_date, day_name)
            start_datetime = convert_time(start_time, current_date)
            end_datetime = convert_time(end_time, current_date)

            now_utc = datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%SZ')

            ical_data.append("BEGIN:VEVENT")
            ical_data.append(f"DTSTART;TZID=Asia/Dhaka:{start_datetime}")
            ical_data.append(f"DTEND;TZID=Asia/Dhaka:{end_datetime}")
            ical_data.append(f"RRULE:FREQ=WEEKLY;WKST=SU;UNTIL={end_date}T235959Z;BYDAY={capitalize(day_name)}")
            ical_data.append(f"DTSTAMP:{now_utc}")
            ical_data.append(f"UID:{uuid.uuid4()}@example.com")
            ical_data.append(f"CREATED:{now_utc}")
            ical_data.append(f"LAST-MODIFIED:{now_utc}")
            ical_data.append("SEQUENCE:0")
            ical_data.append("STATUS:CONFIRMED")
            ical_data.append(f"SUMMARY:{code}")
            ical_data.append("TRANSP:OPAQUE")
            ical_data.append("END:VEVENT")

    ical_data.append("END:VCALENDAR")
    return "\n".join(ical_data)

def main(json_file):
    start_date = "20240421"
    end_date = "20241024"
    json_data = read_json_file(json_file)
    ical_content = convert_to_ical(json_data, start_date, end_date)
    output_file = f"{json_file.split('.')[0]}.ics"
    with open(output_file, 'w') as file:
        file.write(ical_content)
    print(f"iCal data has been written to {output_file}")

if __name__ == "__main__":
    json_file = sys.argv[1] if len(sys.argv) > 1 else "F.json"  # Replace with your actual JSON file path or get from command line
    main(json_file)

