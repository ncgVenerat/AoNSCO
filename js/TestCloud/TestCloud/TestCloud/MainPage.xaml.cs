using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;
using WordCloudControl;

namespace TestCloud
{
    public partial class MainPage : UserControl
    {
        public MainPage()
        {
            InitializeComponent();
            var l = new ObservableCollection<WordCloud.WordCloudEntry>()
                        {
                            new WordCloud.WordCloudEntry() { Word = "Hello", SizeValue = 50, ColorValue=20,Angle = 11}, 
                            new WordCloud.WordCloudEntry() { Word = "World", SizeValue = 45, ColorValue=32,Angle = 18 }, 
                            new WordCloud.WordCloudEntry() { Word = "This is", SizeValue = 42, ColorValue=32,Angle = 14 }, 
                            new WordCloud.WordCloudEntry() { Word = "Mike Talbot's", SizeValue = 47, ColorValue=32,Angle = 21 }, 
                            new WordCloud.WordCloudEntry() { Word = "New", SizeValue = 35, ColorValue=32,Angle = 20 }, 
                            new WordCloud.WordCloudEntry() { Word = "Word Cloud", SizeValue = 65, ColorValue=32,Angle = 15 }, 
                            new WordCloud.WordCloudEntry() { Word = "Component", SizeValue = 35, ColorValue=32,Angle = 17 }, 
                            new WordCloud.WordCloudEntry() { Word = "http://whydoidoit.com", SizeValue = 28, ColorValue=19,Angle = 11 }, 
                            new WordCloud.WordCloudEntry() { Word = "Use it", SizeValue = 16, ColorValue=19,Angle = 16 }, 
                            new WordCloud.WordCloudEntry() { Word = "Free", SizeValue = 53, ColorValue=19,Angle = 16 }, 
                            new WordCloud.WordCloudEntry() { Word = "Create", SizeValue = 23, ColorValue=19,Angle = 11 }, 
                            new WordCloud.WordCloudEntry() { Word = "Wordle", SizeValue = 40, ColorValue=19,Angle = 14 }, 
                            new WordCloud.WordCloudEntry() { Word = "Tag Clouds", SizeValue = 22, ColorValue=19,Angle = 12 }, 
                            new WordCloud.WordCloudEntry() { Word = "www.alterian.com", SizeValue = 15, ColorValue=26,Angle = 18 }
                        };

            foreach(var c in l)
                Cloud.Entries.Add(c);
            
            
        }

        
        private void TextToMap_OnTextChanged(object sender, TextChangedEventArgs e)
        {
            var output = string.Empty;
            var text = TextToMap.Text;
            output = text.Where(c => Char.IsLetter(c) || c == ' ').Aggregate(output, (current, c) => current + c);
            var words = output.Split(' ');
            var dic = new Dictionary<string, int>();
            foreach (var w in words)
            {
                if (dic.ContainsKey(w))
                    dic[w]++;
                else
                {
                    dic[w] = 1;
                }
            }

            var l = dic.Select(k => new WordCloud.WordCloudEntry() { SizeValue = k.Value, Word = k.Key }).ToList();
            Cloud.Entries = new ObservableCollection<WordCloud.WordCloudEntry>(l);

        }

        private void Cloud_OnMouseLeftButtonDown(object sender, MouseButtonEventArgs e)
        {
            Cloud.SelectedItems.Clear();
            var entry = Cloud.GetEntry(e.GetPosition(Cloud));
            if(entry != null)
                Cloud.SelectedItems.Add(Cloud.Entries.IndexOf(entry));
            
        }
    }
}
